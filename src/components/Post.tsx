import React, { useEffect, useState } from 'react';
import axios from 'axios';

// リクエスト時に末尾に郵便番号（ハイフンなし）を追加する
const rootURL: string = 'https://zipcloud.ibsnet.co.jp/api/search?zipcode=';

interface Props {
  postCode: string;
  getAddress: (resultAddress: string) => void;
}

export default function Post({ postCode, getAddress }: Props) {
  const requestUrl = rootURL + postCode;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [result, setResult] = useState('');

  useEffect(() => {
    const accessApi = async () => {
      const {
        data: { results },
      } = await axios.get(requestUrl);
      if (results === null) {
        setResult(`${postCode}に該当する住所が存在しません。`);
        return;
      }
      const address = results[0].address1 + results[0].address2 + results[0].address3;
      setResult(address);
    };
    accessApi();
  }, [result, postCode]);

  getAddress(result);

  return (
    <div>
      <h3>access to api</h3>
    </div>
  );
}
