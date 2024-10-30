// import styles from "./SearchBar.module.css";

import { Toaster, toast } from 'react-hot-toast';

const SearchBar = ({ onSubmit }) => {

  const handleSubmit = evt => {
    evt.preventDefault();

    const form = evt.target;
    const query = form.elements.query.value;

    if (query.trim() === '') {
        toast.error('Please enter a search term', {
        position: 'top-center',
        duration: 2000,
        style: {
          background: '#363636',
          color: '#fff',
        },
        });
      
      return;
    };

    onSubmit(query);
    form.reset();
  }
 
  return (
    <div>
      <header>
  <form onSubmit={handleSubmit}>
    <input
      type="text"
      name='query'
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
    <button type="submit">Search</button>
  </form>
      </header>
      <Toaster 
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          className: '',
          duration: 3000,
          style: {
            background: '#363636',
            color: '#fff',
          },
        }}
      />
    </div>
  )
}

export default SearchBar