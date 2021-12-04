import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AgendaCreateInput } from './agenda-create.input';

@ArgsType()
export class CreateOneAgendaArgs {

    @Field(() => AgendaCreateInput, {nullable:false})
    data!: AgendaCreateInput;
}
