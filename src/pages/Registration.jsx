import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import formConfig from "../data/formConfig";
import Loader from "../components/Loader";
import { showError, showSuccess } from "../utils/toastUtil";
import AOS from "aos";
import "aos/dist/aos.css";
import getEvents from "../services/eventService";
import { toast } from "react-toastify";
import axios from "axios";

const Registration = () => {
  const { eventId } = useParams();
  const navigate = useNavigate(); // To handle redirection
  const [formFields, setFormFields] = useState([]);
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(true);

  const [event, setEvent] = useState({});

  const [myevents, setmyEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getEvents();
        setmyEvents(data);

      } catch (error) {
        toast.error("Error loading data!");
      }
    };

    fetchData();
  }, []);



  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      const eventDetails = myevents.find((event) => event._id === eventId);

      if (eventDetails) {
        setEvent(eventDetails);
        console.log(eventDetails?.Form?.sequence)
        setFormFields(eventDetails?.Form?.sequence);
      } else {
        setEvent(null);
      }
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);

  }, [myevents]);


  useEffect(() => {
    AOS.init();
  }, []);
  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://ee7a-115-244-141-202.ngrok-free.app/submits", { eventId: event, studentDetails: formData }, { headers: { "ngrok-skip-browser-warning": "69420" } });

      toast.success("Submit Success!")
      navigate("/")


    } catch (error) {
      if (error.response) {
        toast.error("Error")
        console.log(`Error: ${error.response.data}`);
      } else {
        console.log("An unexpected error occurred. Please try again.");
      }
    }
  };


  if (loading) {
    return <Loader />;
  }

  return (
    <div data-aos="fade-up" className="registration-form-container">
      <div className="intro-container">
        <h1 className="registration-form-heading">Registration Form</h1>
        <p className="registration-form-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
          mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
          mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
          tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
          massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
          fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae
          mattis tellus. Aliquam in hendrerit urna. Pellentesque sit amet sapien
          fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae
          mattis tellus.
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        {formFields.map((field) => {
          if (field.type === "Select") {
            return (
              <div key={field.name} className="form-group">
                <div className="formInputLabel">
                  <label>{field.inputName}</label>
                  {field.required && <span className="required">*</span>}
                </div>
                <select
                  name={field.inputName}
                  // required={field.required}
                  onChange={handleInputChange}
                >
                  <option value="">Select an option</option>
                  {field.placeholder.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            );
          }

          if (field.type === "Checkbox") {
            return (
              <div key={field.name} className="form-group">
                <div className="formInputLabel">
                  <label>{field.inputName}</label>
                  {field.required && <span className="required">*</span>}
                </div>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  {field.placeholder.map((option, index) => (
                    <div key={index} className="checkbox-option">
                      <input
                        type="checkbox"
                        name={field.inputName}
                        value={option}
                        onChange={handleInputChange}
                      />
                      <label>{option}</label>
                    </div>
                  ))}
                </div>
              </div>
            );
          }

          if (field.type === "Radio") {
            return (
              <div key={field.name} className="form-group">
                <div className="formInputLabel">
                  <label>{field.inputName}</label>
                  {field.required && <span className="required">*</span>}
                </div>
                <div style={{ display: "flex", gap: "0.5rem" }}>

                  {field.placeholder.map((option, index) => (
                    <div key={index} className="radio-option">
                      <input
                        type="radio"
                        name={field.inputName}
                        value={option}
                        required={field.required}
                        onChange={handleInputChange}
                      />
                      <label>{option}</label>
                    </div>
                  ))}
                </div>
              </div>
            );
          }

          return (
            <div key={field.name} className="form-group">
              <div className="formInputLabel">
                <label>{field.inputName}</label>
                {field.required && <span className="required">*</span>}
              </div>
              <input
                type={field.type}
                name={field.inputName}
                placeholder={field.placeholder}
                required={field.required}
                onChange={handleInputChange}
              />
            </div>
          );
        })}

        <div className="button-container">
          <button type="submit" className="submit-button">
            Submit Details
          </button>
        </div>
      </form>
    </div>
  );
};

export default Registration;
