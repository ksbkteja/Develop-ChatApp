import React from 'react';
import './ConversationSearch.scss';
import Sidebar from '../../Sidebar/Sidebar.js';
import Button from '../../controls/buttons/Button';

const sidebarItems = [
    { name: "Dashboard", label: "Dashboard" },
    {
      name: "My Posted jobs",
      label: "My Posted jobs"
    },
    {
      name: "My Profile",
      label: "My Profile"
    },
    { name: "My jobs", label: "My jobs" },
    {
      name: "Messages",
      label: "Messages"
    },
    {
      name: "Documents",
      label: "Documents"
    },
    { name: "Invoices", label: "Invoices" },
    {
      name: "Job Payment Request",
      label: "Job Payment Request"
    },
    {
      name: "My earnings",
      label: "My earnings"
    },
    {
      name: "My Cards",
      label: "My Cards"
    },
    { name: "Payments & Membership", label: "Payments & Membership" },
    {
      name: "Review & Material",
      label: "Review & Material"
    }
  ];
const ConversationSearch = ({ selectedConversation  }) => {
    let chatTitle = null;
    
    if (selectedConversation) {
        let image =selectedConversation.imageUrl;
        chatTitle = (
            <React.Fragment style={{display:'flex'}}>
                <span><img src={image} className="image" alt="person"/></span>
                <span style={{color:'#fff',fontSize:'medium',padding:'5px'}}>{ selectedConversation.title }</span>
                <br/>
                <div className="sidebar">
                    <Sidebar items={sidebarItems} style={{fontSize:'22px'}} />
                    <Button className="btn">POST A JOB</Button>
                </div>
            </React.Fragment>
        );
    }
    return (
        <div id="search-container" className="image">
            { chatTitle }
        </div>
    );
}

export default ConversationSearch;