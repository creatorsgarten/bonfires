import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AgendaCreateManyInput } from './agenda-create-many.input';

@ArgsType()
export class CreateManyAgendaArgs {

    @Field(() => [AgendaCreateManyInput], {nullable:false})
    data!: Array<AgendaCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
