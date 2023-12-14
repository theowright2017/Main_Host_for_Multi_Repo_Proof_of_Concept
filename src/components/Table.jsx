import React, { useState } from "react";
import styles from "../styles/Table.module.css";

const Table = (props) => {
	const [items, setItems] = useState(props.items);
	return (
		<div className={styles.TableContainer}>
			<h3>Sub Table</h3>

			<table className={styles.Table}>
				<thead>
					<tr>
						{["Name", "Code"].map((title) => (
							<th>{title}</th>
						))}
					</tr>
				</thead>
				<tbody>
					{items.map((item) => (
						<tr>
							<td>{item.name}</td>
							<td>{item.code}</td>
						</tr>
					))}
				</tbody>
			</table>
			<div className={styles.ButtonContainer}>
				<button
					style={{ marginRight: "10px" }}
					onClick={() => setItems([...items, { name: "new", code: "123" }])}
				>
					ADD
				</button>
				<button onClick={() => setItems([...items.slice(0, -1)])}>
					REMOVE
				</button>
			</div>
		</div>
	);
};

export default Table;
