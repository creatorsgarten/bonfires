import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DutyWhereInput } from './duty-where.input';

@ArgsType()
export class DeleteManyDutyArgs {

    @Field(() => DutyWhereInput, {nullable:true})
    where?: DutyWhereInput;
}
