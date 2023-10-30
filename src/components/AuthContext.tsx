import React, { createContext, useState, useContext, ReactNode } from 'react';
import axios from 'axios';


interface User {
  username: string;
  email: string;
}


interface AuthContextType {
  user: User | null;
  login: (username: string, password: string) => void;
//   logout: () => void;
}


const AuthContext = createContext<AuthContextType | undefined>(undefined);


export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}


interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);


  const login = (username: string, password: string) => {
    
      
    //  const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwa2lkIjoiMyIsImVtYWlsIjoiY2hpcmFnLnN1dGFyaXlhMUBzcGVjLWluZGlhLmNvbSIsIlVzZXJUeXBlIjoiMSIsInBsYW5uYW1lIjoiIiwianRpIjoiYTU2NzYyYWYtMzU1Ni00ZDE2LTljOTQtZTlhNmY4MjI4YWM0IiwibmJmIjoxNjkzODI5NDI2LCJleHAiOjE2OTM4NjU0MjYsImlhdCI6MTY5MzgyOTQyNiwiaXNzIjoiRnJlZC1CYWNrZW5kIiwiYXVkIjoiRnJlZC1Gcm9udGVuZCJ9.wyKxBZs2On3LYGvqNQrylRp5P-oUlmo7ra9befvt2Tk"
    // const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwa2lkIjoiMyIsImVtYWlsIjoiY2hpcmFnLnN1dGFyaXlhMUBzcGVjLWluZGlhLmNvbSIsIlVzZXJUeXBlIjoiMSIsInBsYW5uYW1lIjoiIiwianRpIjoiMmE3YzU3M2ItYzgxYS00ODU3LWE3YTgtZjU2NDVmZTdlMmMxIiwibmJmIjoxNjk0NzUwMjYxLCJleHAiOjE2OTQ3ODYyNjEsImlhdCI6MTY5NDc1MDI2MSwiaXNzIjoiRnJlZC1CYWNrZW5kIiwiYXVkIjoiRnJlZC1Gcm9udGVuZCJ9.y3b3uHsOVRl6vJxSClCqdUIdtSxK7QdB2wDi-CE2C8I"
    axios
        .post("http://10.37.55.216:5000/api/v1/Auth/UserLogin" ,{UserName :username, Password:password},{
        headers: {
          // "Authorization" : `Bearer ${token} `
      }
      })
      .then((response) => {
        const Data = response.data;
        if (Data) {
          localStorage.setItem("Token",response.data.data.token)
          localStorage.setItem("email",username)
          window.location.href = "/Home"; 
        }
      })
      
        
  
    
    const user = { username, email: 'example@example.com' };
    setUser(user);
  };

//   const logout = () => {
    
//     setUser(null);
//   };

  return (
    <AuthContext.Provider value={{ user, login }}>
      {children}
    </AuthContext.Provider>
  );
}
