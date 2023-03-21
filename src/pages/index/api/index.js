import axios from 'axios';
import { createAxios } from '@/axios';
import { store } from '@/store';
import { GetRouter } from '../main';

export default createAxios(axios, GetRouter(), store);
