eDoctor Therapy Session App

eDoctor is a therapy session application designed with distinct interfaces for users and doctors. It provides various features to facilitate therapy management and secure communication.

Features

User Interface

• Login & Authentication
    
    •Secure login using JWT token
    •User roles stored in local storage

•Dashboard
    
    •Add relative information, tasks, or medication reminders in a         calendar To-Do list
    •Tasks can be marked as complete, removed, or swapped
    •Integrated timer for task management
    •Visual representation of tasks and progress using Chart.js

•Doctor Interaction

    •Book a doctor and chat in real-time using WebSocket
    •Schedule therapy sessions and view them in the meeting section        (Feature in development)

•E-commerce Integration
    
    •Shop for items and add them to the cart
    •Secure payment processing integrated with Stripe

Doctor Interface

    •Patient Management
    
        •View all users who have booked a session with the doctor
        •Real-time chat with patients
        •Access patient information including name, email, relatives,         task charts, and cart details

Technical Details

    •Authentication: JWT Token
    •Real-time Communication: WebSocket
    •Data Visualization: Chart.js
    •Payment Processing: Stripe
    •Storage: Local storage for role management

•Development Status
•Completed:
    
    •User and Doctor login with JWT authentication
    •Calendar To-Do list with task management
    •Real-time chat using WebSocket
    •E-commerce functionality with Stripe integration

•In Progress:

    •Booking and displaying therapy sessions in the meeting section

Feel free to modify or add more details as needed!
