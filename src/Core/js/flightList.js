import React, { useState } from "react";
import '../css/flight-list.css'

const FlightList = () => {
    const [expandedRow, setExpandedRow] = useState(null);

    const flights = [
        { id: 1, departure: "Warsaw", destination: "Dubai", price: 1100, details: "Flight duration: 6h 30m" },
        { id: 2, departure: "London", destination: "New York", price: 1500, details: "Flight duration: 7h 50m" },
        { id: 3, departure: "Krakow", destination: "Gdansk", price: 250, details: "Flight duration: 1h 15m" },
    ];

    const toggleRow = (id) => {
        setExpandedRow(expandedRow === id ? null : id);
    };

    return (
        <div className="flightList">
            <div className="sort-div">
                <button
                    className="sort-button" onClick={() => {}}>Sort</button>
            </div>
                <table>
                    <thead>
                    <tr>
                        <th>Departure</th>
                        <th>Destination</th>
                        <th>Price</th>
                    </tr>
                    </thead>
                    <tbody>
                    {flights.map((flight) => (
                        <React.Fragment key={flight.id}>
                            <tr onClick={() => toggleRow(flight.id)} style={{ cursor: "pointer" }}>
                                <td>{flight.departure}</td>
                                <td>{flight.destination}</td>
                                <td>{flight.price}</td>
                            </tr>

                            {expandedRow === flight.id && (
                                <tr>
                                    <td className='expanded-row' colSpan="3">
                                        {flight.details}
                                    </td>
                                </tr>
                            )}
                        </React.Fragment>
                    ))}
                    </tbody>
                </table>
        </div>
    );
};

export default FlightList;
