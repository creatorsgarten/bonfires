import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DutyCreateInput } from './duty-create.input';

@ArgsType()
export class CreateOneDutyArgs {

    @Field(() => DutyCreateInput, {nullable:false})
    data!: DutyCreateInput;
}
