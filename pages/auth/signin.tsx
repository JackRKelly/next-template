import { GetServerSideProps, NextPage } from 'next';
import { BuiltInProviderType } from 'next-auth/providers';
import { ClientSafeProvider, getProviders, signIn } from 'next-auth/react';
import Column from '../../components/Column';

interface SignInPageProps {
	providers: Record<BuiltInProviderType, ClientSafeProvider> | null;
}

const SignInPage: NextPage<SignInPageProps> = (props) => {
	const { providers } = props;

	return (
		<Column>
			<div className="w-full h-full flex flex-col items-center justify-center">
				<div className="w-full flex items-center justify-center">
					<div className="flex flex-col min-w-16 max-w-25 md:min-w-18">
						{providers ? (
							<>
								<div className="flex flex-col">
									<span className="text-gray-400 text-xs font-body">
										Sign in using one of the following options.
									</span>
									<div className="grid grid-cols-2 gap-3.5 mt-4">
										{providers.google && (
											<button
												onClick={() => signIn(providers.google.id, { callbackUrl: '/dashboard' })}
											>
												google
											</button>
										)}
										{providers.discord && (
											<button
												onClick={() => signIn(providers.discord.id, { callbackUrl: '/dashboard' })}
											>
												discord
											</button>
										)}
									</div>
									<div className="grid grid-cols-4 gap-3.5 mt-4">
										{providers.twitch && (
											<button
												onClick={() => signIn(providers.twitch.id, { callbackUrl: '/dashboard' })}
											>
												twitch
											</button>
										)}
										{providers.spotify && (
											<button
												onClick={() => signIn(providers.spotify.id, { callbackUrl: '/dashboard' })}
											>
												spotify
											</button>
										)}
										{providers.github && (
											<button
												onClick={() => signIn(providers.github.id, { callbackUrl: '/dashboard' })}
											>
												github
											</button>
										)}
									</div>
								</div>

								<div>
									<span className="block text-center mt-6">or</span>
								</div>
							</>
						) : null}

						<div className=" flex flex-col">
							<label htmlFor="email-input">Email</label>
							<input color="primary" placeholder="Email" type="email" name="email-input" />
							<label htmlFor="email-input">Password</label>
							<input color="primary" placeholder="Password" type="password" />

							<button className="mt-3 py-2.5 px-2.5">Sign In</button>
						</div>
					</div>
				</div>
			</div>
		</Column>
	);
};

export default SignInPage;

export const getServerSideProps: GetServerSideProps<SignInPageProps> = async () => {
	const providers = await getProviders();

	return {
		props: { providers }
	};
};
