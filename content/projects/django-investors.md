---
id: 8
date: april 24, 2024
image: "images/project/invest.jpg"
github: "https://github.com/michaelssavage/django-investors"
technology: ["Django", "PostgreSQL"]
---

# Django Investors

This project was a coding interview challenge I completed in a week. It is a Django application that automated the creation of bills and cash calls for an investor. A cash call is an invoice consisting of a group bills. Generated bills and cash calls were stored in PostgreSQL. Once cash calls were validated in the GUI, a PDF invoice could be generated.

:pic{ src="images/project/invest.jpg" alt="coffee icon" :center=true }

An initial CSV of investors and investments was given. I gave two options for creating the cash calls.

1. The user could run a script that would build the models and store them in the database.
2. Or use the GUI to click the generate buttons.

I focused a lot on making sure I jotted down all my assumptions and areas of exploration. I used Notion for writing, Trello for tracking work completed, and a PostGreSQL database for storing generated models.
