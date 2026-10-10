'use client';
import React from 'react';

import { Button,ListBox,Label} from "@heroui/react";
import { Icon } from "@iconify/react";
import { authClient } from '@/lib/auth-client';



const RighSideBar = () => {

  const handleGoogleSignIn = async() =>{
     const data = await authClient.signIn.social({
    provider: "google",
  });
  console.log()
  }
    return (
      <div>
        <h2 className="mb-5 font-semibold text-lg">Login With</h2>

        <div className="flex w-full max-w-xs flex-col gap-3">
          <Button className="w-full" variant="tertiary" onClick={handleGoogleSignIn}>
            <Icon icon="devicon:google" />
            Sign in with Google
          </Button>
          <Button className="w-full" variant="tertiary">
            <Icon icon="mdi:github" />
            Sign in with GitHub
          </Button>
        </div>
        <h2 className='my-4 font-semibold'>Find Us On </h2>
        <div>
          <ListBox
            aria-label="Social links"
            className="w-full max-w-xs border rounded-lg"
            selectionMode="none"
          >
            <ListBox.Item
              id="facebook"
              textValue="Facebook"
              className="py-3 border-b"
            >
              <Icon icon="logos:facebook" className="text-xl mr-3" />
              <Label>Facebook</Label>
            </ListBox.Item>
            <ListBox.Item
              id="twitter"
              textValue="Twitter"
              className="py-3 border-b"
            >
              <Icon icon="logos:twitter" className="text-xl mr-3" />
              <Label>Twitter</Label>
            </ListBox.Item>
            <ListBox.Item id="instagram" textValue="Instagram" className="py-3">
              <Icon icon="skill-icons:instagram" className="text-xl mr-3" />
              <Label>Instagram</Label>
            </ListBox.Item>
          </ListBox>
        </div>
      </div>
    );
};

export default RighSideBar;