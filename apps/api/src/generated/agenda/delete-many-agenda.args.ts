import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AgendaWhereInput } from './agenda-where.input';

@ArgsType()
export class DeleteManyAgendaArgs {

    @Field(() => AgendaWhereInput, {nullable:true})
    where?: AgendaWhereInput;
}
