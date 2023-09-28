import getFavoriteListings from "../actions/getFavoritieListing"
import ClientOnly from "../components/ClientOnly"
import EmptyState from "../components/EmptyState"
import getCurrentUser  from '@/app/actions/getCurrentUser';
import FavoritesClient from "./FavoritesClient";

const ListingPage = async () => {

  const listings = await getFavoriteListings()
  const currentUser = await getCurrentUser()

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No favorites found"
          subtitle="Looks like you have no favorites listings"
        />
      </ClientOnly>
    )
  }
  return (
    <ClientOnly>
      <FavoritesClient
        listings={listings}
        currentUser={currentUser}
      />
    </ClientOnly>
  )
}

export default ListingPage;