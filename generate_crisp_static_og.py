import os
from PIL import Image, ImageDraw, ImageFont

def draw_rounded_box(draw, box, radius, fill, outline=None, width=1):
    draw.rounded_rectangle(box, radius=radius, fill=fill, outline=outline, width=width)

def draw_bullet_dot(draw, cx, cy, r, color):
    draw.ellipse([cx - r, cy - r, cx + r, cy + r], fill=color)

def generate_static_crisp_image(output_path, badge_text, title_line1, title_line2, card_items, footer_items):
    width, height = 1200, 630
    
    # 1. Crisp Deep Indigo Solid Background with subtle geometric contrast (No blur filters!)
    img = Image.new('RGB', (width, height), (12, 4, 30))
    draw = ImageDraw.Draw(img)
    
    # Subtle crisp diagonal section divider for depth
    draw.polygon([(720, 0), (1200, 0), (1200, 630), (620, 630)], fill=(22, 12, 48))
    
    # Fonts
    font_dir = "C:/Windows/Fonts"
    try:
        f_brand = ImageFont.truetype(f"{font_dir}/segoeuib.ttf", 26)
        f_brand_sub = ImageFont.truetype(f"{font_dir}/segoeui.ttf", 18)
        f_pill = ImageFont.truetype(f"{font_dir}/segoeuib.ttf", 16)
        f_title = ImageFont.truetype(f"{font_dir}/arialbd.ttf", 46)
        f_sub = ImageFont.truetype(f"{font_dir}/segoeuib.ttf", 22)
        f_card_title = ImageFont.truetype(f"{font_dir}/arialbd.ttf", 24)
        f_card_desc = ImageFont.truetype(f"{font_dir}/segoeui.ttf", 16)
        f_footer = ImageFont.truetype(f"{font_dir}/segoeuib.ttf", 16)
    except Exception:
        f_brand = f_brand_sub = f_pill = f_title = f_sub = f_card_title = f_card_desc = f_footer = ImageFont.load_default()

    # Outer border
    draw_rounded_box(draw, [20, 20, width - 20, height - 20], radius=16, fill=None, outline=(110, 94, 147), width=2)
    
    # Header: IPR KARO • Legal & Trademark Intelligence
    draw.text((60, 50), "IPR KARO", font=f_brand, fill=(255, 255, 255))
    draw_bullet_dot(draw, 200, 66, 4, (160, 140, 210))
    draw.text((215, 54), "LEGAL & TRADEMARK INTELLIGENCE", font=f_brand_sub, fill=(200, 190, 230))
    
    # Category Pill
    pill_bbox = f_pill.getbbox(badge_text.upper())
    pw = pill_bbox[2] - pill_bbox[0] + 32
    draw_rounded_box(draw, [60, 105, 60 + pw, 142], radius=8, fill=(110, 94, 147), outline=(180, 160, 230), width=1)
    draw.text((76, 114), badge_text.upper(), font=f_pill, fill=(255, 255, 255))
    
    # Left Main Title (Large, Bold, High-Contrast White)
    draw.text((60, 170), title_line1, font=f_title, fill=(255, 255, 255))
    draw.text((60, 226), title_line2, font=f_title, fill=(255, 225, 120)) # Gold highlight on second line
    
    # Subtitle / Hook
    draw.text((60, 300), "Official IP India Statutory Guide & Compliance", font=f_sub, fill=(210, 200, 240))
    
    # Left Bottom Feature Badges
    by = 520
    bx = 60
    for item in footer_items:
        ibbox = f_footer.getbbox(item)
        iw = ibbox[2] - ibbox[0] + 40
        draw_rounded_box(draw, [bx, by, bx + iw, by + 44], radius=10, fill=(35, 20, 70), outline=(130, 110, 190), width=1)
        draw_bullet_dot(draw, bx + 16, by + 22, 4, (110, 231, 183))
        draw.text((bx + 28, by + 12), item, font=f_footer, fill=(255, 255, 255))
        bx += iw + 16
        
    # Right Side Feature Cards Container (x: 670 to 1140 -> width 470px)
    # 3 Distinct High-Contrast Cards
    cy = 85
    for c in card_items:
        # Card Box
        draw_rounded_box(draw, [670, cy, 1140, cy + 125], radius=14, fill=(28, 14, 58), outline=c["border_color"], width=2)
        
        # Left accent color bar
        draw_rounded_box(draw, [670, cy, 682, cy + 125], radius=6, fill=c["accent_color"])
        
        # Title
        draw.text((705, cy + 22), c["title"], font=f_card_title, fill=c["accent_color"])
        
        # Description lines
        draw.text((705, cy + 58), c["desc1"], font=f_card_desc, fill=(240, 235, 255))
        draw.text((705, cy + 84), c["desc2"], font=f_card_desc, fill=(190, 180, 215))
        
        cy += 145

    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    img.save(output_path, "PNG")
    print(f"Saved static crisp image to: {output_path}")

if __name__ == "__main__":
    # 1. Joint Trademark Ownership
    generate_static_crisp_image(
        "public/images/og/joint-trademark-ownership-co-founders-india.png",
        badge_text="Startup IP & Co-Founder Structuring",
        title_line1="Joint Trademark Ownership",
        title_line2="in India: Section 24 Guide",
        card_items=[
            {
                "title": "Joint Filing in Form TM-A",
                "desc1": "Register brand under multiple co-founders",
                "desc2": "Undivided legal title protected under Section 24",
                "accent_color": (255, 215, 100),
                "border_color": (160, 130, 80)
            },
            {
                "title": "50% Govt Fee Subsidy",
                "desc1": "Subsidized fee of ₹4,500 per class (e-filing)",
                "desc2": "Valid for individual founders & registered MSMEs",
                "accent_color": (110, 231, 183),
                "border_color": (60, 150, 120)
            },
            {
                "title": "Co-Ownership Agreement",
                "desc1": "Defines equity shares & avoids deadlock",
                "desc2": "Mandates Form TM-P transfer upon incorporation",
                "accent_color": (244, 114, 182),
                "border_color": (160, 80, 130)
            }
        ],
        footer_items=["Section 24 Rules", "IP India e-Register", "2026 Compliance"]
    )

    # 2. Franchise Trademark Licensing
    generate_static_crisp_image(
        "public/images/og/trademark-licensing-agreement-for-franchise-business-india.png",
        badge_text="Franchise Brand Protection & Licensing",
        title_line1="Trademark Licensing for",
        title_line2="Franchise Business in India",
        card_items=[
            {
                "title": "FOCO & FOFO IP Models",
                "desc1": "Commercial brand licensing for retail networks",
                "desc2": "Territorial exclusivity & franchisor goodwill",
                "accent_color": (255, 215, 100),
                "border_color": (160, 130, 80)
            },
            {
                "title": "Quality Control Clauses",
                "desc1": "Mandatory vendor sourcing & audit mechanisms",
                "desc2": "Prevents fatal naked licensing cancellation",
                "accent_color": (110, 231, 183),
                "border_color": (60, 150, 120)
            },
            {
                "title": "Form TM-U Registered User",
                "desc1": "Official statutory recordation under Section 49",
                "desc2": "Statutory defense against non-use cancellations",
                "accent_color": (244, 114, 182),
                "border_color": (160, 80, 130)
            }
        ],
        footer_items=["Section 48 & 49", "Form TM-U Recordation", "2026 Compliance"]
    )
