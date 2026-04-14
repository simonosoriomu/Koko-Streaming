import re
import os

def apply_dark_cyan_theme():
    # Ensure reference html exists
    ref_path = "reference.html"
    if not os.path.exists(ref_path):
        print("Reference.html missing.")
        return

    with open(ref_path, "r", encoding="utf-8") as f:
        html = f.read()

    # 1. Names and numbers
    html = html.replace("Tienda Streaming", "Koko streaming")
    html = html.replace("tiendastreaming.co", "kokostreaming.co")
    html = html.replace("573173901459", "573170573237")
    html = html.replace("https://i.postimg.cc/Bb1Jw4QJ/45-Tienda-Streaming-(38).png", "assets/streaming_logo_1775688711164.png")

    # 2. Extract CSS
    style_match = re.search(r'<style>(.*?)</style>', html, flags=re.DOTALL)
    if style_match:
        style_content = style_match.group(1).strip()
        html = html[:style_match.start()] + '<link rel="stylesheet" href="style.css">' + html[style_match.end():]
        
        # Adjust hexes in CSS
        style_content = style_content.replace("#FF008A", "#0ea5e9")
        style_content = style_content.replace("#8900FF", "#0ea5e9")
        style_content = style_content.replace("#D25CFF", "#38bdf8")
        style_content = style_content.replace("#FF6FE0", "#06b6d4")
        style_content = style_content.replace("#FFA8E6", "#22d3ee")
        style_content = style_content.replace("255, 0, 138", "14, 165, 233")
        
        with open("style.css", "w", encoding="utf-8") as f:
            f.write(style_content)

    # 3. Extract main JS
    script_matches = list(re.finditer(r'<script>(.*?)</script>', html, flags=re.DOTALL))
    if script_matches:
        main_script = script_matches[-1]
        script_content = main_script.group(1).strip()
        html = html[:main_script.start()] + '<script src="script.js"></script>' + html[main_script.end():]
        with open("script.js", "w", encoding="utf-8") as f:
            f.write(script_content)

    # 4. Tailwind Theme Config & Body Hexes (Purple -> Cyan/Blue)
    html = html.replace("#9732DD", "#38bdf8") # brand-light
    html = html.replace("#802BBB", "#0ea5e9") # brand-mid
    html = html.replace("#7427A9", "#0284c7") # brand-dark

    html = html.replace("#9A38E3", "#0ea5e9") # Gradient radial
    html = html.replace("#210A38", "#082f49") # Gradient radial edge
    html = html.replace("151,50,221", "14, 165, 233") # RGB shadows replacement
    
    # Let's ensure text colors inside buttons are white (contrast fix explicitly applied to make sure)
    html = html.replace("text-gray-900", "text-white") # any dark texts inside dynamic button styles (if any)
    # The original file has text-black in some places, like WhatsApp button "bg-[#25D366] text-black"
    # That is fine for whatsapp button contrast.

    with open("index.html", "w", encoding="utf-8") as f:
        f.write(html)

    # Clean up reference
    try:
        os.remove(ref_path)
    except:
        pass

apply_dark_cyan_theme()
print("Done")
