import { FaUser, FaLock } from "react-icons/fa";
import styles from "./Login.module.scss";
import Button from "../Button/Button";
import { useState } from "react";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const loginSubmitSchema = z.object({
  email: z.string().email({ message: "E-mail inválido! Tente novamente." }),
  password: z.string({ message: "Campo obrigatório!" }),
});

type LoginSubmitSchema = z.infer<typeof loginSubmitSchema>;

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit } = useForm<LoginSubmitSchema>({
    resolver: zodResolver(loginSubmitSchema),
  });

  function handleSendLogin(data: LoginSubmitSchema) {
    setIsLoading(true);

    new Promise((resolve) => setTimeout(resolve, 4000))
      .then(() => {
        console.log(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
        throw error;
      });
  }

  return (
    <div className={styles.Login}>
      <form
        onSubmit={handleSubmit(handleSendLogin)}
        className={styles.formulario}
      >
        <h1 className={styles.title}>Acesse o sistema</h1>
        <div className={styles.formItem}>
          <input type="email" placeholder="E-mail" {...register("email")} />
          <FaUser className={styles.icon} />
        </div>
        <div className={styles.formItem}>
          <input
            type="password"
            placeholder="Senha"
            {...register("password")}
          />
          <FaLock className={styles.icon} />
        </div>

        <div className={styles.recall}>
          <label>
            <input type="checkbox"  />
            Lembre de mim
          </label>
          <a href="#">Esqueceu a senha?</a>
        </div>
        <div className={styles.formItem}>
          <Button loading={isLoading}>Entrar</Button>
        </div>

        <div className={styles.signup}>
          <p>
            Não tem uma conta? <a href="#">Registrar-se.</a>
          </p>
        </div>
      </form>
    </div>
  );
}
