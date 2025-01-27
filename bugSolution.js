```javascript
import Link from 'next/link';
import { useRouter } from 'next/router';

function MyComponent() {
  const router = useRouter();
  const handleClick = (id) => {
    router.push(`/dynamic/${id}`);
  };

  return (
    <div>
      <button onClick={() => handleClick(1)}>Go to /dynamic/1</button>
      <button onClick={() => handleClick(2)}>Go to /dynamic/2</button>
    </div>
  );
}

export default MyComponent;
```