import { useState } from "react";
import Link from "next/link";
import { useFormik } from "formik";
import axios from "axios";
import * as yup from "yup";

import Layout from "../components/shared/Layout";

import { GOOGLE_APPS_SCRIPT_URL } from "../config";

const register = () => {
	const [registered, setRegistered] = useState(false);
	const formik = useFormik({
		initialValues: { Name: "", Email: "", Phone: "", Reg: "", Institute: "" },
		onSubmit: (values) => {
			const form = new FormData();
			for (var key in values) {
				form.append(key, values[key]);
			}
			axios
				.post(GOOGLE_APPS_SCRIPT_URL, form)
				.then((res) => {
					setRegistered(true);
					console.log(res.data);
				})
				.catch((err) => console.error("Error!", err.message));
		},
		validationSchema: yup.object({
			Name: yup.string().trim().required(),
			Email: yup.string().trim().email("Not a valid email!").required(),
			Phone: yup
				.string()
				.trim()
				.matches(
					/^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/,
					"Not a valid phone number"
				)
				.required(),
			Reg: yup.string().trim().required(),
			Institute: yup.string().trim().required(),
		}),
	});
	return (
		<Layout>
			<main className="px-4 md:px-8 mx-auto mt-4 mb-24">
				<div className="mx-auto max-w-7xl heading text-center">
					Registration
				</div>
				<div className="mx-auto max-w-7xl text-2xl text-text-secondary text-center mb-10">
					CONCEPTO 2021
				</div>
				{registered ? (
					<article className="text-center mt-44 mb-64">
						<div className="bg-gradient-to-r from-accent via-accent to-telegram text-transparent bg-clip-text font-semibold text-2xl">
							You've succesfully registered for CONCEPTO 2021. Awesomeness
							awaits you!
						</div>
						<div className="text-text-secondary mt-6 text-lg">
							We've sent your event ticket to your email. Do check that out!
							Also don't forget to see what do we have in store.
						</div>
						<Link href="/events">
							<a>
								<button className="liveBtn mt-6">View all Events</button>
							</a>
						</Link>
					</article>
				) : (
					<form
						className="flex flex-col max-w-2xl mx-auto"
						onSubmit={formik.handleSubmit}
					>
						<label className="flex flex-col mb-6 text-text-secondary">
							Name
							<input
								className="mt-1 px-3 py-2 bg-background-secondary border text-text-primary border-text-secondary rounded-md focus:ring"
								{...formik.getFieldProps("Name")}
							/>
							<ErrorArea field="Name" formik={formik} />
						</label>
						<label className="flex flex-col mb-6 text-text-secondary">
							Email
							<input
								className="mt-1 px-3 py-2 bg-background-secondary border text-text-primary border-text-secondary rounded-md focus:ring"
								{...formik.getFieldProps("Email")}
							/>
							<ErrorArea field="Email" formik={formik} />
						</label>
						<label className="flex flex-col mb-6 text-text-secondary">
							Phone
							<input
								className="mt-1 px-3 py-2 bg-background-secondary border text-text-primary border-text-secondary rounded-md focus:ring"
								{...formik.getFieldProps("Phone")}
							/>
							<ErrorArea field="Phone" formik={formik} />
						</label>
						<label className="flex flex-col mb-6 text-text-secondary">
							Institute
							<input
								className="mt-1 px-3 py-2 bg-background-secondary border text-text-primary border-text-secondary rounded-md focus:ring"
								{...formik.getFieldProps("Institute")}
							/>
							<ErrorArea field="Institute" formik={formik} />
						</label>
						<label className="flex flex-col mb-6 text-text-secondary">
							Institute ID
							<input
								className="mt-1 px-3 py-2 bg-background-secondary border text-text-primary border-text-secondary rounded-md focus:ring"
								{...formik.getFieldProps("Reg")}
							/>
							<ErrorArea field="Reg" formik={formik} />
						</label>
						{formik.isSubmitting ? (
							<div className="balls-loader mt-6 self-center">
								<div></div>
								<div></div>
								<div></div>
							</div>
						) : (
							<button className="liveBtn self-center mt-4" type="submit">
								Submit
							</button>
						)}
					</form>
				)}
			</main>
		</Layout>
	);
};

export default register;

const ErrorArea = ({ field, formik }) => (
	<>
		{formik.touched[field] && formik.errors[field] && (
			<div className="text-red-500 text-sm font-semibold">
				{formik.errors[field]}
			</div>
		)}
	</>
);
