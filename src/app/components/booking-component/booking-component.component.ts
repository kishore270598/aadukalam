import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-booking-component',
  standalone: true,
  imports: [NgFor],
  templateUrl: './booking-component.component.html',
  styleUrls: ['./booking-component.component.css'],
})
export class BookingComponentComponent {
  // Example data for table
  bookings = [
    {
      date: '2025-01-14',
      time: '10:00 AM - 12:00 PM',
      name: 'John Doe',
      sport: 'Basketball',
      cash: 50,
      upi: 30,
      otherPaymentMode: 'Card',
      description: 'Practice session booking',
    },
    {
      date: '2025-01-15',
      time: '2:00 PM - 4:00 PM',
      name: 'Jane Smith',
      sport: 'Tennis',
      cash: 70,
      upi: 0,
      otherPaymentMode: 'Cash',
      description: 'Match booking',
    },
  ];

  // Delete a row
  deleteRow(index: number): void {
    if (confirm('Are you sure you want to delete this booking?')) {
      this.bookings.splice(index, 1); // Remove the row at the given index
    }
  }

  // Insert a new row (with dummy data for now)
  insertRow(): void {
    const newBooking = {
      date: '2025-01-16',
      time: '8:00 AM - 10:00 AM',
      name: 'Mark Taylor',
      sport: 'Badminton',
      cash: 0,
      upi: 40,
      otherPaymentMode: 'UPI',
      description: 'Individual training session',
    };
    this.bookings.push(newBooking); // Add the new booking to the array
  }

  // Update a row (edit an entry)
  updateRow(index: number): void {
    const updatedBooking = {
      ...this.bookings[index], // Keep the original data
      description: 'Updated booking details', // Update the description (example)
      sport: 'Updated Sport', // Example: Change the sport
    };
    this.bookings[index] = updatedBooking; // Replace the old booking with the updated one
  }
}
