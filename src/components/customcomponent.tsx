import { PortableTextComponents } from "@portabletext/react";
export  const Components: PortableTextComponents = {
    block:{
        h2: ({ children }) => <h2 className="text-4xl font-bold underline text-yellow-200 text-center my-8 text-outline">{children}</h2>,
        p: ({ children }) => <p className="text-xl text-green-200 text-outline">{children}</p>,
    }
}