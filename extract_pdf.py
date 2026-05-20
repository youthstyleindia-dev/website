import os
import sys

def extract_text_from_pdf(pdf_path, output_txt_path):
    print(f"Attempting to extract text from: {pdf_path}")
    
    # Try pdfplumber first
    try:
        import pdfplumber
        print("Using pdfplumber...")
        with pdfplumber.open(pdf_path) as pdf:
            text = ""
            for i, page in enumerate(pdf.pages):
                page_text = page.extract_text()
                if page_text:
                    text += f"--- Page {i+1} ---\n{page_text}\n\n"
            
            with open(output_txt_path, "w", encoding="utf-8") as f:
                f.write(text)
            print(f"Extracted {len(pdf.pages)} pages successfully to {output_txt_path} using pdfplumber.")
            return True
    except ImportError:
        print("pdfplumber is not installed.")
    
    # Try pypdf
    try:
        import pypdf
        print("Using pypdf...")
        reader = pypdf.PdfReader(pdf_path)
        text = ""
        for i, page in enumerate(reader.pages):
            page_text = page.extract_text()
            if page_text:
                text += f"--- Page {i+1} ---\n{page_text}\n\n"
        
        with open(output_txt_path, "w", encoding="utf-8") as f:
            f.write(text)
        print(f"Extracted {len(reader.pages)} pages successfully to {output_txt_path} using pypdf.")
        return True
    except ImportError:
        print("pypdf is not installed.")

    # Try PyMuPDF (fitz)
    try:
        import fitz
        print("Using PyMuPDF (fitz)...")
        doc = fitz.open(pdf_path)
        text = ""
        for i, page in enumerate(doc):
            page_text = page.get_text()
            if page_text:
                text += f"--- Page {i+1} ---\n{page_text}\n\n"
        
        with open(output_txt_path, "w", encoding="utf-8") as f:
            f.write(text)
        print(f"Extracted {len(doc)} pages successfully to {output_txt_path} using PyMuPDF.")
        return True
    except ImportError:
        print("PyMuPDF is not installed.")
        
    print("No PDF parsing libraries available. Please install pdfplumber or pypdf.")
    return False

if __name__ == "__main__":
    pdf_path = "vrholidayhomes Brandbook by Pomelli.pdf"
    output_txt_path = "brandbook_text.txt"
    if not os.path.exists(pdf_path):
        print(f"Error: {pdf_path} not found.")
        sys.exit(1)
    
    success = extract_text_from_pdf(pdf_path, output_txt_path)
    if not success:
        sys.exit(1)
