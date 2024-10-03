import { Icon } from "../../components";
import "./css/contact.css";

const contacts = [
  { id: "phone", name: "Phone", value: "+254701062151" },
  { id: "whatsapp", name: "Whatsapp", value: "+254701062151" },
  { id: "email", name: "Email", value: "brianwahinyangure@gmail.com" },
  { id: "address", name: "Address", value: "20319-140 South Kinangop, Kenya" },
];

const communities = [
  { id: "github", name: "Github", link: "https://github.com/BrianWahinya" },
  {
    id: "stackoverflow",
    name: "StackOverflow",
    link: "https://stackoverflow.com/users/10642716/wahinya-brian",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    link: "https://linkedin.com/in/brianwahinya/",
    // link: "https://www.linkedin.com/in/brian-wahinya-051b0b138/",
  },
  {
    id: "instagram",
    name: "Instagram",
    link: "https://instagram.com/wahinyabrian",
  },
];

const Contact = () => {
  return (
    <div className="div-contact">
      <p className="p-title">
        **********************************************************
        <br />
        ***************&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;****************
        <br />
        ***************&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Contacts&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;****************
        <br />
        ***************&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;****************
        <br />
        **********************************************************
      </p>
      <div className="div-a">
        {contacts.map((item) => {
          const { id, name, value } = item;
          return (
            <div key={`contact_contacts_${id}`}>
              <p className="p-name">
                <Icon id={id} /> <span>{name}: </span>
              </p>
              <p className="p-value">{value}</p>
            </div>
          );
        })}
      </div>
      <div className="div-b">
        <p className="p-name">
          <Icon id="community" /> <span>Communities: </span>{" "}
        </p>
        <div className="div-communities">
          {communities.map((item) => {
            const { id, name, link } = item;
            return (
              <a
                key={`contact_community_${id}`}
                id={`contact_${id}`}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon id={id} />
                <span>{name}</span>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Contact;
