import fitz

pdf_path = r"C:\Users\chetn\Downloads\SAWE website.pdf"
doc = fitz.open(pdf_path)

for i in range(len(doc)):
    page = doc.load_page(i)
    pix = page.get_pixmap(dpi=150)
    output_path = f"c:\\Repos\\heartwarming-web-harmony-73abf620\\sawe_website_page{i}.png"
    pix.save(output_path)
    print(f"Saved {output_path}")

doc.close()
