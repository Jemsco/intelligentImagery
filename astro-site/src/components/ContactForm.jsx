/**
 * ContactForm — the only React island on the site (hydrated with client:load).
 *
 * Ported from the old CRA `Contact.js` (styled-components + jQuery-era DOM
 * hacks). Rewritten to be state-driven and accessible. Fixes carried over
 * from the migration plan:
 *   - handleEmailBlur validates with emailTest (the old code used nameTest).
 *   - Field borders and error/status text are driven by React state, not
 *     document.getElementById(...).style / .innerText mutations.
 *   - Submit validity is computed synchronously (the old code read the
 *     just-set `formErrors` state, which was stale on the same tick).
 *   - Dropped the stray console.log and the invalid autoComplete="none".
 *   - No <h1> here — the single page <h1> lives in contact.astro. Error and
 *     status text sit in aria-live regions so screen readers announce them.
 */
import { useState } from "react";
import "./ContactForm.css";

// Existing AWS API Gateway endpoint (unchanged from the CRA site).
const ENDPOINT = "https://sjuhk1jny2.execute-api.us-east-1.amazonaws.com/prod/";

const nameTest = /[A-Za-z]{1}[A-Za-z]/;
const emailTest = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

export default function ContactForm() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const [nameError, setNameError] = useState("");
	const [emailError, setEmailError] = useState("");
	const [messageError, setMessageError] = useState("");

	const [status, setStatus] = useState("Submit");
	const [statusMessage, setStatusMessage] = useState("");

	// Validate everything and reflect results in state. Returns overall validity
	// synchronously so the submit handler doesn't depend on a state update.
	const validate = () => {
		const nameOk = nameTest.test(name);
		const emailOk = emailTest.test(email);
		const messageOk = message.trim().length > 0;

		setNameError(nameOk ? "" : "Please enter a name.");
		setEmailError(emailOk ? "" : "Please enter a valid email address.");
		setMessageError(messageOk ? "" : "Please enter your message.");

		return nameOk && emailOk && messageOk;
	};

	const handleNameBlur = () =>
		setNameError(nameTest.test(name) ? "" : "Please enter a name.");

	const handleEmailBlur = () =>
		setEmailError(
			emailTest.test(email) ? "" : "Please enter a valid email address."
		);

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!validate()) {
			setStatusMessage("Please correct the errors above.");
			return;
		}
		setStatusMessage("");
		setStatus("Sending…");

		try {
			const response = await fetch(ENDPOINT, {
				method: "POST",
				headers: { "Content-Type": "application/json;charset=utf-8" },
				body: JSON.stringify({ name, email, desc: message }),
			});

			setStatus("Submit");
			if (response.ok) {
				setStatusMessage("Thank you! Your message was sent successfully.");
				setName("");
				setEmail("");
				setMessage("");
			} else {
				setStatusMessage(
					"Sorry, something went wrong sending your message. Please try again."
				);
			}
		} catch {
			setStatus("Submit");
			setStatusMessage(
				"Network error — please check your connection and try again."
			);
		}
	};

	return (
		<form className="cf-form" onSubmit={handleSubmit} noValidate>
			<p className="cf-lead">Let&apos;s talk</p>

			<div className="cf-field">
				<input
					className={`cf-input${nameError ? " cf-input--error" : ""}`}
					type="text"
					name="name"
					id="cf-name"
					placeholder=" "
					autoComplete="name"
					value={name}
					aria-invalid={nameError ? "true" : undefined}
					aria-describedby="cf-name-error"
					onBlur={handleNameBlur}
					onChange={(e) => setName(e.target.value)}
				/>
				<label className="cf-label" htmlFor="cf-name">
					Name
				</label>
				<span className="cf-error" id="cf-name-error" aria-live="polite">
					{nameError}
				</span>
			</div>

			<div className="cf-field">
				<input
					className={`cf-input${emailError ? " cf-input--error" : ""}`}
					type="email"
					name="email"
					id="cf-email"
					placeholder=" "
					autoComplete="email"
					value={email}
					aria-invalid={emailError ? "true" : undefined}
					aria-describedby="cf-email-error"
					onBlur={handleEmailBlur}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<label className="cf-label" htmlFor="cf-email">
					Email
				</label>
				<span className="cf-error" id="cf-email-error" aria-live="polite">
					{emailError}
				</span>
			</div>

			<div className="cf-field">
				<textarea
					className={`cf-textarea${messageError ? " cf-input--error" : ""}`}
					id="cf-message"
					name="message"
					rows="4"
					placeholder="Enter your message"
					value={message}
					aria-invalid={messageError ? "true" : undefined}
					aria-describedby="cf-message-error"
					onChange={(e) => setMessage(e.target.value)}
				/>
				<label className="cf-label cf-label--static" htmlFor="cf-message">
					Message
				</label>
				<span className="cf-error" id="cf-message-error" aria-live="polite">
					{messageError}
				</span>
			</div>

			<button className="cf-button" type="submit">
				{status}
			</button>

			<p className="cf-status" role="status" aria-live="polite">
				{statusMessage}
			</p>
		</form>
	);
}
