import type { NextPage } from 'next';
import Head from 'next/head';
import Column from '../components/Column';

const HomePage: NextPage = () => {
	return (
		<Column>
			<Head>
				<title>Next-Template</title>
			</Head>

			<h1>Next-Template</h1>

			<p>With TypeScript, Next-Auth, Prisma, Postgres, Docker</p>
		</Column>
	);
};

export default HomePage;
