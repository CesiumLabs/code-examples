import pandas as pd
import smtplib


def sendEmail(to, sub, msg, GMAIL_ID, GMAIL_PSWD):
    print(f"Email to {to} sent with subject: {sub} and message: {msg}")
    s = smtplib.SMTP('smtp.gmail.com', 587)
    s.starttls()
    s.login(GMAIL_ID, GMAIL_PSWD)
    s.sendmail(GMAIL_ID, to, f"Subject: {sub}\n\n{msg}")
    s.quit()


if __name__ == "__main__":
    GMAIL_ID = input("Enter your Email Id: ")
    GMAIL_PSWD = input("Enter your Password: ")
    Subject = input("Enter the Subject: ")
    Message = input("Enter the Message: ")

    df = pd.read_excel('YOUR FILE NAME')

    for index, value in df.iterrows():
        to = value['Email']
        name = value['Name']
        msg= 'Dear '+name+', '+Message
        sendEmail(to,  Subject, msg, GMAIL_ID, GMAIL_PSWD)
        
