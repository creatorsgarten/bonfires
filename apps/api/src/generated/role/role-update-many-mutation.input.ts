import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleType } from '../prisma/role-type.enum';

@InputType()
export class RoleUpdateManyMutationInput {

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => RoleType, {nullable:true})
    type?: keyof typeof RoleType;
}
