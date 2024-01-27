import { useState } from 'react';
import Card from '../Card';
import { StatistaItem } from '@/lib/types';

type CardListProps = {
  data: Array<StatistaItem> | undefined;
  text: string;
};

export default function CardsList({ data, text }: CardListProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data?.slice(indexOfFirstItem, indexOfLastItem) || [];
  const totalPages = data ? Math.ceil(data.length / itemsPerPage) : 0;

  const handleNextPage = () => {
    setCurrentPage(currentPage => Math.min(currentPage + 1, totalPages));
  };

  const handlePreviousPage = () => {
    setCurrentPage(currentPage => Math.max(currentPage - 1, 1));
  };

  return (
    <section className="container mx-auto">
      {data && data.length > 0 ? (
        <>
          {currentItems.map(item => (
            <Card key={item.identifier} post={item} />
          ))}
          {data.length > itemsPerPage ? (
            <div className="my-12 text-center">
              <button
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
                className="w-32 h-12 mr-2 bg-stblue text-white font-bold rounded-md">
                Previous
              </button>
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="w-32 h-12 ml-2 bg-stblue text-white font-bold rounded-md">
                Next
              </button>
            </div>
          ) : null}
        </>
      ) : (
        <p className="text-center text-2xl text-stblack border p-4 m-4 shadow-md">
          {text}
        </p>
      )}
    </section>
  );
}
