
import Table from "@/components/Table";
import { items } from "@/data/items";
import React, { useState } from "react";

const Main = (props) => {
	const [toggle, setToggle] = useState(false);

	return (
		<div>
			<h2>Main</h2>
			<Table items={items} />
            <div style={{marginTop: '20px'}}>
			<div>
				{toggle ? stringToUppercase("toggled string") : "toggled string"}
			</div>
			<button onClick={() => setToggle(!toggle)}>TOGGLE</button>
            </div>
        </div>
	);
};

export default Main;
