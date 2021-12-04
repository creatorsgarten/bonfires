import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class StaffUpdateManyMutationInput {

    @Field(() => String, {nullable:true})
    displayName?: string;
}
