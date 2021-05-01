import React, { useState } from "react";
import { Form, Input, message } from "antd";

import { Btn } from "../../../components/shared/styles/layout";
import { addType } from "../../../services/animal";

const AnimalTypeForm = () => {
	const [type, setType] = useState("");

	const onFinish = async () => {
		try {
			await addType(type);

			message.success("Animal type saved!");
		} catch (err) {
			message.error(err.response.data.message);
		}
	};

	const onChange = (e) => setType(e.target.value);

	return (
		<Form
			name="basic"
			initialValues={{
				remember: true,
			}}
			onFinish={onFinish}
		>
			<Form.Item
				label="Animal Type"
				name="type"
				rules={[
					{
						required: true,
					},
				]}
			>
				<Input
					onChange={onChange}
					value={type}
					type="text"
					name="type"
					placeholder="Animal Type"
				/>
			</Form.Item>
			<Btn htmlType="submit">Add animal type</Btn>
		</Form>
	);
};

export default AnimalTypeForm;
