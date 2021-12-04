import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProfileCreateInput } from './profile-create.input';

@ArgsType()
export class CreateOneProfileArgs {

    @Field(() => ProfileCreateInput, {nullable:false})
    data!: ProfileCreateInput;
}
