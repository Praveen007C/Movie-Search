// Import Main Components
import NavBar from "./components/Header/NavBar";
import Main from "./components/Main";
import Box from "./components/Box";
import Loader from "./components/Loader";
import MovieList from "./components/MovieList";
import ErrorMessage from "./components/ErrorMessage";
import MovieDetails from "./components/MovieDetails";


// Import Contexts
import { useData } from "./context/useData";

function App() {
  const { selectedId, isLoading, error } = useData();

  return (
    <>
      <NavBar />

      <Main>
        <Box>
          {isLoading && <Loader />}
          {!isLoading && !error && <MovieList />}
          {error && <ErrorMessage />}
        </Box>

        <Box>
          {selectedId ? (
            <MovieDetails />
          ) : (
            <>
            
            </>
          )}
        </Box>
      </Main>
    </>
  );
}

export default App;
