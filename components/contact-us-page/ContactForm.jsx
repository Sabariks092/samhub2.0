"use client";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import Field from "../common/Field";

function ContactForm() {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	const submitForm = (formData) => {
		toast("Form Submitted successfully!");
		reset();
		console.log("Submitted Form Data = ", formData);
	};

	return (
		<div className="sofax-field-box ml-50 contact-form-small">
			<style>{`
				.contact-form-small h3 {
					font-size: 28px;
					margin-bottom: 25px;
				}
				.contact-form-small label {
					font-size: 14px !important;
					font-weight: 500;
					margin-bottom: 6px;
					color: var(--heading-color);
				}
				.contact-form-small input,
				.contact-form-small select,
				.contact-form-small textarea {
					font-size: 14px !important;
					padding: 10px 15px !important;
					height: 48px;
					border-radius: 6px !important;
					border: 1px solid #dcdfe8 !important;
					background-color: #fff !important;
					width: 100%;
					color: #3c3c3c !important;
					transition: border-color 0.2s;
					font-family: inherit;
				}
				.contact-form-small input:focus,
				.contact-form-small select:focus,
				.contact-form-small textarea:focus {
					border-color: var(--accent-color) !important;
					outline: none;
				}
				.contact-form-small textarea {
					height: 120px !important;
					resize: none !important;
				}
				.contact-form-small .text-danger {
					font-size: 12px;
					margin-top: 4px;
					display: block;
				}
				.contact-form-small .sofax-main-field {
					margin-bottom: 20px;
				}
				.contact-form-small select {
					appearance: auto;
				}
			`}</style>
			<ToastContainer position="bottom-right" />
			<h3>Send us a message</h3>
			<form onSubmit={handleSubmit(submitForm)}>
				<div className="row">
					<div className="col-lg-6">
						<div className="sofax-main-field">
							<Field label="Your Name" error={errors.name}>
								<input
									{...register("name", { required: "Name is required." })}
									type="text"
									name="name"
									id="name"
									placeholder="Enter your name"
								/>
							</Field>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="sofax-main-field">
							<Field label="Mobile Number" error={errors.mobile}>
								<input
									{...register("mobile", { 
										required: "Mobile number is required.",
										pattern: {
											value: /^[0-9+\s-]{10,15}$/,
											message: "Invalid mobile number."
										}
									})}
									type="tel"
									name="mobile"
									id="mobile"
									placeholder="Enter mobile number"
								/>
							</Field>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="sofax-main-field">
							<Field label="Email Address" error={errors.email}>
								<input
									{...register("email", { 
										required: "Email is required.",
										pattern: {
											value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
											message: "Invalid email address."
										}
									})}
									type="email"
									name="email"
									id="email"
									placeholder="Enter email address"
								/>
							</Field>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="sofax-main-field">
							<Field label="Service Needed" error={errors.service}>
								<select
									{...register("service", { required: "Please select a service." })}
									name="service"
									id="service"
									defaultValue=""
								>
									<option value="" disabled>Select a service</option>
									<option value="software-development">Software Development</option>
									<option value="website-development">Website Development</option>
									<option value="digital-branding">Digital Branding</option>
									<option value="ui-ux-development">UI/UX Development</option>
									<option value="mobile-app-development">Mobile App Development</option>
									<option value="seo-optimization">SEO Optimization</option>
									<option value="meta-and-google-ads">Meta and Google Ads</option>
									<option value="social-media-marketing">Social Media Marketing</option>
									<option value="video-production-and-editing">Video Production & Editing</option>
								</select>
							</Field>
						</div>
					</div>
					<div className="col-lg-12">
						<div className="sofax-main-field">
							<Field label="Message" error={errors.message}>
								<textarea 
									{...register("message", { required: "Message is required." })}
									name="message" 
									id="message"
									placeholder="Write your message details here"
								/>
							</Field>
						</div>
					</div>
					<div className="col-lg-12">
						<div className="tac">
							<button id="sofax-submit-btn" className="mt-10" type="submit">
								Send Message
							</button>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
}

export default ContactForm;
