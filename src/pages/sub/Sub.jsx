import Table from "@/components/Table";
import React, { useState } from "react";

const items = [
	{ name: "Mike", code: "234LKK" },
	{ name: "John", code: "LLS987" },
];

const Sub = (props) => {
	const [toggle, setToggle] = useState(false);

	return (
		<div>
			<h2>SUB</h2>
			<Table items={items} />
			<div style={{ marginTop: "20px" }}>
				<div>
					{toggle ? stringToUppercase("toggled string") : "toggled string"}
				</div>
				<button onClick={() => setToggle(!toggle)}>TOGGLE</button>
			</div>
		</div>
	);
};

export default Sub;
