import { useQuery } from '@tanstack/react-query';
import { StatistaItem } from '../types';
import { getStatistaDataClient } from '../statista';

export default function useStatistaQuery() {
  const { data, refetch } = useQuery<StatistaItem[]>({
    queryKey: ['statista'],
    queryFn: () => getStatistaDataClient(),
  });

  return { data, refetch };
}
