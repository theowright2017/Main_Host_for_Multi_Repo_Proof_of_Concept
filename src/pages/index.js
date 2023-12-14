import { Inter } from "next/font/google";
import * as Tabs from "@radix-ui/react-tabs";

import styles from  "../styles/Main.module.css";
import Main from "./main/Main";
import Sub from "./sub/Sub";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

	return (
    <div className="container">
		<Tabs.Root className={styles.TabsRoot}>
			<Tabs.List className={styles.TabsList}>
				<Tabs.Trigger className={styles.TabsTrigger} value={"tab1"}>
					MAIN
				</Tabs.Trigger>
				<Tabs.Trigger className={styles.TabsTrigger} value={"tab2"}>
					SUB
				</Tabs.Trigger>
			</Tabs.List>
			<Tabs.Content className={styles.TabsContent} value={"tab1"}>
				<Main />
			</Tabs.Content>

			<Tabs.TabsContent className={styles.TabsContent} value={"tab2"}>
				<Sub />
			</Tabs.TabsContent>

			<Tabs.Content />
		</Tabs.Root>
    </div>
	);
}
