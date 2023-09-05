import React, {useState,useEffect} from 'react'
import img1 from '../Assets/image1.avif'
import AccordionItem from './AccordianItems'
import '../styles/faq.css'
const Faq = () => {

    const faqs = [
        {
            id: 1,
            header: "What is Jain Jalebi known for?",
            text: `Jain Jalebi is renowned for serving authentic and delicious Jain cuisine, with a special focus on jalebi and other Jain-friendly dishes.`
        },
        {
            id: 2,
            header: "Does Jain Jalebi offer Jain-only dishes?",
            text: `Yes, Jain Jalebi specializes in Jain cuisine, ensuring that all dishes adhere to Jain dietary guidelines. `
        },
        {
            id: 3,
            header: "Is the restaurant suitable for large groups or events?",
            text: `Yes, Jain Jalebi can accommodate large groups and events. It's recommended to make a reservation in advance for group bookings.`
        },
        {
            id: 4,
            header: "Does Jain Jalebi offer delivery services?",
            text: `Yes, Jain Jalebi provides delivery services through various food delivery platforms. You can enjoy their food in the comfort of your home.`
        },
        {
            id: 5,
            header: "Can I make a reservation online??",
            text: `Yes, you can typically make reservations online through the restaurant's official website or other reservation platforms.`
        },
        {
            id: 6,
            header: "Are there parking facilities available?",
            text: `Jain Jalebi usually has parking facilities available for customers, but it's advisable to check with them for specific details.`
        }
    ]


    const [active, setActive] = useState(null);

    const handleToggle = (index) => {
        if (active === index) {
            setActive(null);
        } else {
            setActive(index);
        }
    }
    
    return (
        <>
            <div className="container-fluid mt-5 mb-5">
                <div className="row justify-content-center">
                    <div className="col-md-8 mt-2">
                        <div className="card">
                            <div className="card-body">
                              <h4 className="form-heading mb-4 text-warning font-bold text-decoration-line:underline text-center mt-3">JAIN JALEBI FAQ</h4>
                                {faqs.map((faq, index) => {
                                     return (
                                            <AccordionItem key={index} active={active} handleToggle={handleToggle} faq={faq} />
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

  

export default Faq