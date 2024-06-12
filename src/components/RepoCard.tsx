import { useEffect, useState } from 'react';
import { useActions } from '../hooks/actions';
import { useAppSelector } from '../hooks/redux';
import { IRepo } from '../models/models';

export function RepoCard({ repo }: { repo: IRepo }) {
	const { addFavourite } = useActions();

	const { favourites } = useAppSelector(state => state.github);
	const [isFavourite, setIsFavourite] = useState(false);

	useEffect(() => {
		const existingFavourite = favourites.find(fav => fav.url === repo.html_url);
		setIsFavourite(!!existingFavourite);
	}, [favourites, repo.html_url]);

	const addToFavourite = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();

		addFavourite({ url: repo.html_url, full_name: repo.name });
	};

	return (
		<div className='border py-3 px-5 mb-2 rounded cursor-pointer hover:shadow-md hover:bg-gray-100 transition-shadow duration-200'>
			<div className='flex items-center'>
				<div className='w-[350px]'>
					<h2 className='text-lg font-bold'>{repo.full_name}</h2>
					<div className='text-sm'>
						<p>
							Forks: <span className='font-bold mr-2'>{repo.forks}</span>
							Watchers: <span className='font-bold mr-2'>{repo.watchers}</span>
						</p>
						{repo.description && (
							<p className='text-sm font-thin px-2'>{repo.description}</p>
						)}
					</div>
				</div>
				<button
					className={`ml-auto py-2 px-4 rounded hover:shadow-md transition-all ${
						isFavourite ? 'bg-green-400 text-white' : 'bg-blue-400 text-white'
					}`}
					onClick={addToFavourite}
					disabled={isFavourite}
				>
					{isFavourite ? 'Liked' : 'Add to Favourites'}
				</button>
			</div>
		</div>
	);
}
