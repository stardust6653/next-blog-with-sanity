import { db } from '@/firebase';
import { addDoc, collection, getDocs, query } from 'firebase/firestore';

interface DataProps {
  title: string;
  md: string;
}

export const getData = async () => {
  const dataArr: DataProps[] = [];

  const postRef = collection(db, 'posts');
  const q = query(postRef);
  const querySnapShot = await getDocs(q);

  querySnapShot.forEach((item) => {
    const returnDoc = item.data() as DataProps;
    dataArr.push(returnDoc);
  });

  return dataArr;
};

interface PostProps {
  id: number;
  title: string;
  markdown: string;
}

export const postData = (event: React.FormEvent<HTMLFormElement>, data: PostProps) => {
  event.preventDefault();
  const postRef = collection(db, 'posts');

  addDoc(postRef, data);
};
