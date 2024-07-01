import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import zod from "zod";

const adminLoginFormSchema = zod.object({
  email: zod.string().email(),
  password: zod.string().min(6)
});

type AdminLoginFormFields = zod.infer<typeof adminLoginFormSchema>;

const DEFAULT_VALUES: AdminLoginFormFields = {
  email: "",
  password: ""
};

export const useAdminLoginForm = () => {
  const adminLoginForm = useForm<AdminLoginFormFields>({
    defaultValues: DEFAULT_VALUES,
    resolver: zodResolver(adminLoginFormSchema)
  });

  const handleFormSubmission = (values: AdminLoginFormFields) => {
    console.log(values);
  };
  const handleSubmitClick = () => {
    return adminLoginForm.handleSubmit(handleFormSubmission);
  };

  return {
    values: {
      errors: adminLoginForm.formState.errors
    },
    actions: {
      register: adminLoginForm.register,
      handleSubmitClick
    }
  };
};
