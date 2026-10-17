import os
from fpdf import FPDF

class WeddingPDF(FPDF):
    def header(self):
        pass

    def footer(self):
        pass

def create_wedding_invitation_pdf(filepath):
    # A4 portrait: 210 x 297 mm
    pdf = WeddingPDF(orientation='P', unit='mm', format='A4')
    pdf.set_auto_page_break(auto=False)
    pdf.add_page()
    
    # Background: Warm Ivory Cream
    # #FAF6F0 -> R:250, G:246, B:240
    pdf.set_fill_color(252, 249, 242)
    pdf.rect(0, 0, 210, 297, 'F')
    
    # Outer Maroon Border
    # Deep Maroon: #580B18 -> R:88, G:11, B:24
    pdf.set_draw_color(88, 11, 24)
    pdf.set_line_width(1.8)
    pdf.rect(8, 8, 194, 281)
    
    # Inner Gold Border
    # Champagne Gold: #D4AF37 -> R:212, G:175, B:55
    pdf.set_draw_color(212, 175, 55)
    pdf.set_line_width(0.7)
    pdf.rect(12, 12, 186, 273)
    
    # Corner Ornamental Accents
    for cx, cy in [(12, 12), (198, 12), (12, 285), (198, 285)]:
        pdf.set_draw_color(180, 130, 30)
        pdf.set_line_width(0.5)
        # Decorative square flourish
        dx = 5 if cx == 12 else -5
        dy = 5 if cy == 12 else -5
        pdf.rect(cx, cy, dx, dy)
    
    # Auspicious Invocations (Header)
    pdf.set_text_color(140, 20, 35) # Deep Maroon
    pdf.set_font('Times', 'B', 14)
    pdf.set_xy(10, 22)
    pdf.cell(190, 8, '|| SREE RASTHU - SUBHAMASTHU - AVIGHNAMASTHU ||', ln=True, align='C')
    
    pdf.set_text_color(190, 140, 30) # Gold
    pdf.set_font('Times', 'I', 11)
    pdf.cell(190, 6, '~ With the Divine Blessings of Lord Venkateshwara & Lord Rama ~', ln=True, align='C')
    
    # Divider line with motif
    pdf.set_draw_color(212, 175, 55)
    pdf.set_line_width(0.5)
    pdf.line(45, 38, 165, 38)
    
    # Main Invitation Title
    pdf.set_text_color(88, 11, 24)
    pdf.set_font('Times', 'B', 22)
    pdf.set_xy(10, 43)
    pdf.cell(190, 10, 'SACRED WEDDING INVITATION', ln=True, align='C')
    
    pdf.set_font('Times', 'I', 12)
    pdf.set_text_color(100, 100, 100)
    pdf.cell(190, 7, 'Together with our families, we cordially invite you to grace the auspicious marriage of', ln=True, align='C')
    
    # Couple Names Section
    pdf.set_xy(10, 65)
    # Bride
    pdf.set_text_color(140, 20, 35)
    pdf.set_font('Times', 'I', 14)
    pdf.cell(190, 6, 'Chi. La. Sow.', ln=True, align='C')
    pdf.set_font('Times', 'B', 26)
    pdf.cell(190, 12, 'SRI LAXMI', ln=True, align='C')
    pdf.set_font('Times', 'I', 11)
    pdf.set_text_color(110, 80, 50)
    pdf.cell(190, 6, 'Beloved Daughter of Sri & Smt. Families', ln=True, align='C')
    
    # "weds" ligature
    pdf.set_xy(10, 94)
    pdf.set_font('Times', 'I', 16)
    pdf.set_text_color(190, 140, 30)
    pdf.cell(190, 7, '- weds -', ln=True, align='C')
    
    # Groom
    pdf.set_xy(10, 104)
    pdf.set_text_color(140, 20, 35)
    pdf.set_font('Times', 'I', 14)
    pdf.cell(190, 6, 'Chi.', ln=True, align='C')
    pdf.set_font('Times', 'B', 26)
    pdf.cell(190, 12, 'NAGESH', ln=True, align='C')
    pdf.set_font('Times', 'I', 11)
    pdf.set_text_color(110, 80, 50)
    pdf.cell(190, 6, 'Beloved Son of Sri & Smt. Families', ln=True, align='C')
    
    # Gold Separator
    pdf.set_draw_color(212, 175, 55)
    pdf.line(55, 134, 155, 134)
    
    # Auspicious Timing Card
    pdf.set_fill_color(248, 240, 230)
    pdf.set_draw_color(200, 160, 60)
    pdf.set_line_width(0.6)
    pdf.rect(30, 140, 150, 48, 'DF')
    
    pdf.set_xy(30, 143)
    pdf.set_font('Times', 'B', 13)
    pdf.set_text_color(140, 20, 35)
    pdf.cell(150, 6, 'SUMUHURTHAM & DATE', ln=True, align='C')
    
    pdf.set_font('Times', 'B', 16)
    pdf.set_text_color(40, 20, 20)
    pdf.cell(150, 8, 'Thursday, 3rd December 2026', ln=True, align='C')
    
    pdf.set_font('Times', 'B', 15)
    pdf.set_text_color(140, 20, 35)
    pdf.cell(150, 8, 'Muhurtham: 9:31 AM', ln=True, align='C')
    
    pdf.set_font('Times', 'I', 12)
    pdf.set_text_color(120, 80, 20)
    pdf.cell(150, 7, 'in auspicious "Dhanur Lagnam"', ln=True, align='C')
    
    pdf.set_font('Times', '', 10)
    pdf.set_text_color(80, 80, 80)
    pdf.cell(150, 6, 'followed by Kalyana Bhojanam & Celebrations', ln=True, align='C')
    
    # Venue Section Card
    pdf.set_fill_color(248, 240, 230)
    pdf.rect(30, 194, 150, 42, 'DF')
    
    pdf.set_xy(30, 197)
    pdf.set_font('Times', 'B', 13)
    pdf.set_text_color(140, 20, 35)
    pdf.cell(150, 6, 'WEDDING VENUE', ln=True, align='C')
    
    pdf.set_font('Times', 'B', 16)
    pdf.set_text_color(40, 20, 20)
    pdf.cell(150, 8, 'Sri Rama Gardens', ln=True, align='C')
    
    pdf.set_font('Times', '', 12)
    pdf.set_text_color(60, 60, 60)
    pdf.cell(150, 6, 'Armoor Road, Nizamabad, Telangana', ln=True, align='C')
    
    pdf.set_font('Times', 'U', 10)
    pdf.set_text_color(20, 70, 180)
    pdf.cell(150, 6, 'Google Maps: https://maps.app.goo.gl/mKQgTzXkruFhgTsm9', ln=True, align='C', link='https://maps.app.goo.gl/mKQgTzXkruFhgTsm9')
    
    # Evening Reception Note
    pdf.set_xy(10, 242)
    pdf.set_font('Times', 'B', 12)
    pdf.set_text_color(140, 20, 35)
    pdf.cell(190, 6, 'RECEPTION & BLESSINGS', ln=True, align='C')
    pdf.set_font('Times', 'I', 11)
    pdf.set_text_color(70, 70, 70)
    pdf.cell(190, 5, 'Thursday, 3rd December 2026 from 7:00 PM onwards at Sri Rama Gardens', ln=True, align='C')
    
    # Family Regards / RSVP
    pdf.set_xy(10, 258)
    pdf.set_draw_color(212, 175, 55)
    pdf.line(55, 257, 155, 257)
    
    pdf.set_font('Times', 'I', 11)
    pdf.set_text_color(120, 80, 20)
    pdf.cell(190, 6, 'Soliciting your kind presence, prayers, and blessings to the newly wedded couple', ln=True, align='C')
    
    pdf.set_font('Times', 'B', 13)
    pdf.set_text_color(88, 11, 24)
    pdf.cell(190, 7, 'Best Compliments & Warm Regards From Families & Relatives', ln=True, align='C')
    
    os.makedirs(os.path.dirname(filepath), exist_ok=True)
    pdf.output(filepath)
    print(f"Generated {filepath} successfully! Size: {os.path.getsize(filepath)} bytes")

if __name__ == '__main__':
    create_wedding_invitation_pdf('public/invitation.pdf')
