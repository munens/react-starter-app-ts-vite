import React, { useState } from 'react';
import { Panel, TextField, Button } from '../../components';

const Login = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const onLoginPress = () => {};

  const onKeyDown = ({ key }: React.KeyboardEvent<HTMLButtonElement>) => {
    if (key !== 'Enter') {
      return;
    }

    onLoginPress();
  };

  return (
    <Panel backgroundColor="bg-black-200" className="w-96">
      <TextField
        label="Username"
        onChange={(v) => setUsername(v)}
        onKeyDown={onKeyDown}
        placeholder="johndoe"
        type="text"
        value={username}
      />
      <TextField
        label="Password"
        onChange={(v) => setPassword(v)}
        onKeyDown={onKeyDown}
        placeholder="***"
        type="text"
        value={password}
      />
      <div className="flex justify-end w-full">
        <Button.Primary onClick={onLoginPress} text="Dashboard" type="button" />
      </div>
    </Panel>
  );
};

export default Login;
