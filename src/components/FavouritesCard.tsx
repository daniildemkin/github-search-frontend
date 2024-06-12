import { useActions } from '../hooks/actions';
import { useAppSelector } from '../hooks/redux';

export function FavouritesCard() {
	const { removeFavourite } = useActions();
	const { favourites } = useAppSelector(state => state.github);

	const removeFromFavourite =
		(url: string) => (event: React.MouseEvent<HTMLButtonElement>) => {
			event.preventDefault();
			removeFavourite(url);
		};

	return (
		<div className='flex justify-center pt-10 mx-auto h-screen w-screen'>
			<div className='w-[450px]'>
				<ul className='list-none'>
					{favourites.map(f => (
						<li key={f.url} className='my-2'>
							<div className='flex justify-between items-center border-[1px] border-solid border-[#505050] p-2 rounded'>
								<a
									href={f.url}
									target='_blank'
									rel='noreferrer'
									className='mr-2'
								>
									{f.full_name}
								</a>
								<button
									className='bg-red-500 text-white px-2 py-1 rounded'
									onClick={removeFromFavourite(f.url)}
								>
									Remove
								</button>
							</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
