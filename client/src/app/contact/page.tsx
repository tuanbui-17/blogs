"use client";

import React from "react";

const Page = () => {
  const [state, setState] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [error, setError] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    let isValid = true;
    const errors = {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    };
    if (!state.firstName) {
      errors.firstName = "First Name is required";
      isValid = false;
    }

    if (!state.lastName.trim()) {
      errors.lastName = "Last Name is required";
      isValid = false;
    }

    if (!state.email.trim()) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email)) {
      errors.email = "Email is invalid";
      isValid = false;
    }

    if (!state.message.trim()) {
      errors.message = "Message is required";
      isValid = false;
    }

    setError(errors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      window.alert("Form submitted successfully \n" + JSON.stringify(state));
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <p className="text-xl font-medium">Let's Get in Touch</p>
      <form onSubmit={handleSubmit}>
        <div className="grid gap-3 mb-6 md:grid-cols-2">
          <div>
            <p className="block mb-2 text-sm font-medium">First Name:</p>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Your first name"
              className={`input mb-1 ${
                error.firstName
                  ? "dark:border-accent-400 border-accent-400 dark:hover:border-accent-400 hover:border-accent-400"
                  : "dark:focus:border-blue-400 focus:border-blue-400"
              }`}
              onChange={handleChange}
              value={state.firstName}
            />
            {error.firstName ? (
              <div className="text-accent-400 text-xs fade-in h-2">
                {error.firstName}
              </div>
            ) : (
              <div className="h-2"></div>
            )}
          </div>
          <div>
            <p className="block mb-2 text-sm font-medium">Last Name:</p>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Your last name"
              className={`input mb-1 ${
                error.lastName
                  ? "dark:border-accent-400 border-accent-400 dark:hover:border-accent-400 hover:border-accent-400"
                  : "dark:focus:border-blue-400 focus:border-blue-400"
              }`}
              onChange={handleChange}
              value={state.lastName}
            />
            {error.lastName ? (
              <div className="text-accent-400 text-xs fade-in h-2">
                {error.lastName}
              </div>
            ) : (
              <div className="h-2"></div>
            )}
          </div>
          <div className="col-span-2">
            <p className="block mb-2 text-sm font-medium">Email:</p>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Youremail@email.com"
              className={`input mb-1 ${
                error.email
                  ? "dark:border-accent-400 border-accent-400 dark:hover:border-accent-400 hover:border-accent-400"
                  : "dark:focus:border-blue-400 focus:border-blue-400"
              }`}
              onChange={handleChange}
              value={state.email}
            />
            {error.email ? (
              <div className="text-accent-400 text-xs fade-in h-2">
                {error.email}
              </div>
            ) : (
              <div className="h-2"></div>
            )}
          </div>
          <div className="col-span-2">
            <p className="block mb-2 text-sm font-medium">Message:</p>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Type your message here..."
              className={`input mb-1 ${
                error.message
                  ? "dark:border-accent-400 border-accent-400 dark:hover:border-accent-400 hover:border-accent-400"
                  : "dark:focus:border-blue-400 focus:border-blue-400"
              }`}
              onChange={handleChange}
              value={state.message}
            />
            {error.message ? (
              <div className="text-accent-400 text-xs fade-in h-2">
                {error.message}
              </div>
            ) : (
              <div className="h-2"></div>
            )}
          </div>
          <div className="col-span-2 text-right">
            <button
              type="submit"
              className="border border-base-400 px-2 py-1 rounded-md dark:hover:border-base-100 transition-colors duration-200 ease-in-out hover:border-base-600"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Page;
