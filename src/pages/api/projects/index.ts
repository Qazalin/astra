import { prisma } from "@astra/lib/prisma";
import { validateRoute } from "@astra/lib/auth";

export default validateRoute(async (req, res, user) => {
  const projects = await prisma.user.findUnique({
    where: {
      id: user.id,
    },
    /* 
    include: {

      projects: true,
    },
    */
  });
});
