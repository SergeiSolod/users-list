import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '@src/store';

export const useSelectorHook: TypedUseSelectorHook<RootState> = useSelector;
