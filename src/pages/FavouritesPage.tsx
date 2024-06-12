import { FavouritesCard } from '../components/FavouritesCard';
import { useAppSelector } from '../hooks/redux';

export function FavouritesPage() {
	const { favourites } = useAppSelector(state => state.github);

	if (favourites.length === 0)
		return <p className='text-center text-2xl mt-2'>No favourites yet</p>;

	return (
		<div className='py-3 px-5 mb-2 '>
			<h2 className='text-lg items-center text-center mb-2 font-bold'>
				Favorite repositories
			</h2>
			<div className='flex items-center justify-center'>
				<FavouritesCard />
			</div>
		</div>
	);
}
